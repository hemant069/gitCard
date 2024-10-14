const DateFormat = (dateString:string) => {
    // console.log(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    let format = date.toLocaleDateString('en-US', options);
  
    return format;
  };
  
  export default DateFormat;