import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import { GameComponent } from './components/GameComponent';
import { DataStructure } from './components/types';
import { useDeviceDetect, useScreenOrientation } from './components/utils';
import { StartScreenView } from './components/views/StartScreenView';
import { CongratulationsView } from './components/views/CongratulationsView';
import { LandscapeUnsupportedView } from './components/views/LandscapeUnsupportedView';
import { ErrorView } from './components/views/ErrorView';
import { LoadingView } from './components/views/LoadingView';

const fetchData = () =>
  axios
    .get<DataStructure[], AxiosResponse<string>>('/data/find_challenge.txt')
    .then(res => res.data)
    .then(res => res.split('\n'))
    .then(lines => lines.map(line => JSON.parse(line)));

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [isStarted, setStarted] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [data, setData] = useState<DataStructure[] | undefined>(undefined);
  const [level, setLevel] = useState(0);
  const orientation = useScreenOrientation();
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      // Do not show loader if loading is fast
      setTimeout(() => setShowLoader(true), 300);

      try {
        const data = await fetchData();
        setData(data);
      } catch (err) {
        setData([]);
        setError(true);
        setShowLoader(false);
      }
      setLoading(false);
    }

    loadData();
  }, []);

  // Disable pinch zoom in Safari ඞ because Apple decided to ignore user-scalable=no
  useEffect(() => {
    document.addEventListener(
      'gesturestart',
      e => {
        e.preventDefault();
      },
      { passive: false }
    );
  });

  const onLevelComplete = () => {
    setTimeout(() => {
      if (level < data!.length - 1) {
        setLevel(currentLevel => currentLevel + 1);
      } else {
        setFinished(true);
      }
    }, 1050);
  };

  if (isError) {
    return <ErrorView />;
  }

  if (isLoading) {
    if (showLoader) return <LoadingView />;
    return <div className="app" />;
  }

  if (isMobile && orientation === 'landscape') {
    return <LandscapeUnsupportedView />;
  }

  if (!isStarted) {
    return <StartScreenView onClick={() => setStarted(true)} />;
  }

  if (isFinished) {
    return <CongratulationsView />;
  }

  const currentLevel = data![level];

  return (
    <div className="app">
      {data && (
        <GameComponent
          level={level}
          data={currentLevel}
          onLevelComplete={onLevelComplete}
        />
      )}
    </div>
  );
};

export default App;
