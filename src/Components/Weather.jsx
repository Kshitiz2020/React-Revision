function Weather({ temperature }) {
  if (temperature > 15) {
    return <div>It's cold!</div>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <div>It's OK!</div>;
  } else {
    return <div>It's hot!</div>;
  }
}

export default Weather;
