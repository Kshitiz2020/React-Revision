function Greeting() {
  const goodMorning = "Good Morning";
  const date = new Date();
  const time = date.getHours();
  return (
    <div>
      {time < 12
        ? goodMorning
        : time > 12
        ? "Good Afternoon"
        : time > 17
        ? "Good Evening"
        : "Good Night"}
    </div>
  );
}

export default Greeting;
