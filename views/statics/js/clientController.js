$(document).ready(() => {
    let leaderInfo;
    const checkServer = () => {
        fetch('/leader')
            .then(res => res.json())
            .then(res => {
                leaderInfo = res.data;
            });
    };
    checkServer();

    // Check server every day for update
    window.setInterval(checkServer, (1000 * 30));


    const displayInfo = () => {
        if (!leaderInfo) {
            return;
        }

        let { current, nextweek, nextDrawDate } = leaderInfo;

        const DateOfNextDraw = new Date(nextDrawDate.split(' ')[0]).getTime();
        const now = new Date().getTime();
        const difference = DateOfNextDraw - now;

        const days = Math.floor(difference/(1000 * 60 * 60 * 24));
        const hrs = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
        const secs = Math.floor((difference % (1000 * 60))/1000);

        const timerHTML = `<div class="timer">
            <div>
                <span class="label">Days:</span>
                <p class="time">${days < 10 ? '0' + days : days} :</p>
            </div>
            <div>
                <span class="label">Hrs:</span>
                <p class="time">${hrs < 10 ? '0' + hrs : hrs} :</p>
            </div>
            <div>
                <span class="label">Mins:</span>
                <p class="time">${mins < 10 ? '0' + mins : mins} :</p>
            </div>
            <div>
                <span class="label">Secs:</span>
                <p class="time">${secs < 10 ? '0' + secs : secs}</p>
            </div>
        </div>`

        if (nextweek === 'Pending') {
            nextweek = timerHTML;
        } else {
            nextweek = `<p>${nextweek}</p>`
        }

        $('#currentLeader').html(current);
        $('#nextLeader').html(nextweek);
    };

    window.setInterval(displayInfo, 1000);
});
