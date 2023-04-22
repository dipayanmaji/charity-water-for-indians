const eventDate = new Date('2024/4/7');

export const getTimeRemaining= ()=>{
    const total = eventDate - new Date();
    if(total <= 0){
        return{
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        }
    }

    let seconds = Math.floor( (total/1000) % 60 );
    let minutes = Math.floor( (total/1000/60) % 60 );
    let hours = Math.floor( (total/(1000*60*60)) % 24 );
    let days = Math.floor( total/(1000*60*60*24) );

    if(seconds < 10) seconds = '0'+seconds;
    if(minutes < 10) minutes = '0'+minutes;
    if(hours < 10) hours = '0'+hours;
    if(days < 10) days = '0'+days;

    return {
        days,
        hours,
        minutes,
        seconds
    };
}
