function Calender() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="calender-chip glass">
      <span>📅</span>
      <span>Current Year: {currentYear}</span>
    </div>
  );
}

export default Calender;