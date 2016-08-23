/**
 * Created by Ankit
 */

(function(){

    var updateSessionTime,updateBreakTime, minutes, seconds;
    var breakTime = 300;
    var startTime = 1500;

    var $sessionTimer = $('.sessionTimer');
    var $breakTimer = $('.breakTimer');
    var $clockSession = $('.clockSession');
    var $clockBreak = $('.clockBreak');

    $('a.btn-floating').on('click',function(){
       if(this.text== 'add'){
           if($(this).parent().hasClass('parent1')){
               updateSessionTime = parseInt($sessionTimer.text()) ;
               if(updateSessionTime<60){
                    updateSessionTime++;
                   startTime +=60;
               }
               $sessionTimer.text(updateSessionTime+':00');
               $clockSession.text(updateSessionTime+':00');
           }else{
               updateBreakTime = parseInt($breakTimer.text()) ;
               if(updateBreakTime<60){
                   updateBreakTime++;
                   breakTime +=60

               }
               $breakTimer.text(updateBreakTime+':00');
               $clockBreak.text(updateBreakTime+':00');
           }
       }
       else  if(this.text== 'remove'){
           if($(this).parent().hasClass('parent1')){
               updateSessionTime = parseInt($sessionTimer.text()) ;
               if( updateSessionTime >1) {
                   updateSessionTime--;
                   startTime -=60
               }
               $sessionTimer.text(updateSessionTime+':00');
               $clockSession.text(updateSessionTime+':00');

           }else{
               updateBreakTime = parseInt($breakTimer.text()) ;
               if( updateBreakTime >1) {
                   updateBreakTime--;
                   breakTime -=60;
               }
               $breakTimer.text(updateBreakTime+':00');
               $clockBreak.text(updateBreakTime+':00');
           }
       }
    });

    $('a.btn').on('click',function(){
        if(this.text == 'Start') {
            this.text = 'Pause';
            startTimer();


        }else if (this.text == 'Pause'){
            this.text = 'Start';
            pauseTimer();
        }else{
            resetAll();
             }

    });
    function startTimer (){

        interval = startTime;

        timeRunning = setInterval(clockMode,1000);
        function clockMode(){
            if(startTime >0 ){
                startTime -= 1;
                minutes = parseInt(startTime/60);
                seconds = startTime%60;
                $clockSession.text(minutes+':'+seconds);
            }else{
                if(breakTime>0){
                    breakTime-=1;
                    console.log(breakTime);
                    minutes = parseInt(breakTime/60);
                    seconds = breakTime%60;
                    $clockBreak.text(minutes+':'+seconds);
                }else{
                    resetAll();
                }

            }
        }

    }
    function pauseTimer(){
        clearInterval(timeRunning);
    }
    function resetAll (){
        clearInterval(timeRunning);
        startTime = 1500;
        breakTime = 300;
        $sessionTimer.text('25:00');
        $breakTimer.text('5:00');
        $clockSession.text('25:00');
        $clockBreak.text('5:00');
        $('a.btn').first().text('Start');
    }





})();