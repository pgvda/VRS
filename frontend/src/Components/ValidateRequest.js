export default function ValidateRequest(){
    const {
        date,
        startTime,
        endTime,
        reason,
        section,
        vehicle,
        comeBack,
        distance,
        depatureLocation,
        destination,
        passengerList,
      } = formData;

      if(!date || !startTime || !endTime || !reason || !section || !vehicle || !comeBack || !distance || !depatureLocation || !destination || passengerList.length ===0){
        alert("fill all of the request form. Otherwise you can't request vehicle")
        return false;
      }

      if(typeof comeBack !== "boolean"){
        alert("Please select whether you want to come back in the same vehicle or not");
        return false
      }

      // time compair

      const startTimeObject = new Date(`2024-01-01${startTime}`);
      const endTimeObject = new Date(`2024-01-01${endTime}`);

      if(endTimeObject <= startTimeObject){
        alert("Check your start time and end time and enter valid end time and start time");
        return false;
      }

      
      return true;
}