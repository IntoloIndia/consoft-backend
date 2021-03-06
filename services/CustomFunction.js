import date from 'date-and-time';


const CustomFunction  = {

    currentDate(){
        const now = new Date();
        const current_date = date.format(now, 'YYYY/MM/DD') // => '2015/01/02 23:14:05'
        return current_date;
    },

    currentTime(){
        const now = new Date();
        const current_time = date.format(now, 'hh:mm A'); // => '11:14 PM
        return current_time;
    },

    dateFormat(inputDate){

        let day, month, year;
        var new_date = new Date(inputDate);

        day = new_date.getDate();
        month = new_date.getMonth() + 1;
        year = new_date.getFullYear();

        if(day < 10) {
            day = '0'+day;
        } 

        if(month < 10) {
            month='0'+month;
        }

        return `${year}/${month}/${day}`; 
    },

    timeFormat(value){
        const pattern = date.compile('hh:mm');
        const formated_time = date.format(new Date(value), pattern);

        return formated_time;
    },

    stringPassword(len){
        var gen_pass = "";
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for( var i=0; i < len; i++ ){
            gen_pass +=charset.charAt(Math.floor(Math.random()*charset.length));
        }
        return gen_pass;
    },

    randomNumber() {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }

}

export default CustomFunction;

