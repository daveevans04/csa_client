import React from 'react';
import {SafeAreaView} from 'react-native';
import Styles from './style';
import Pdf from 'react-native-pdf';

const PdfViewer = ({route: {params: data}}) => {
  if (!data) return null;

  return (
    <SafeAreaView style={Styles.container}>
      <Pdf trustAllCerts={false} source={{uri: data}} style={Styles.pdf} />
    </SafeAreaView>
  );
};

export default PdfViewer;
