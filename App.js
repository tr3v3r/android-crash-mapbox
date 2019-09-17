/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidHIzdjNyIiwiYSI6ImNqeGtwNm9tcjA0NmozenFieTBpdGlpMG8ifQ.VuA_e-TocXLhEHDpVRv5Pg',
);

const App = () => {
  return (
    <Fragment>
      <MapboxGL.MapView
        logoEnabled={false}
        compassEnabled={false}
        style={{flex: 1}}>
        <MapboxGL.Camera
          animationDuration={0}
          animationMode="flyTo"
          zoomLevel={14}
          centerCoordinate={[51.509865, -0.118092]}
        />
      </MapboxGL.MapView>
    </Fragment>
  );
};

export default App;
