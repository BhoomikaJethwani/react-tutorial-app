let CurrDateTime = () => {
  let time = new Date();

  return (
    <>
      <p>
        Today's Date Time: {time.getUTCDate()}/{time.getMonth()}/
        {time.getFullYear()} - {time.getUTCHours()}:{time.getUTCMinutes()}
      </p>
    </>
  );
};

export default CurrDateTime;
