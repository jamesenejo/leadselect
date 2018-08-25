$(document).ready(() => {
    const displayInfo = () => {
        fetch('/leader')
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                let { current, nextweek, nextDrawDate, selected, unselected } = res.data;

                const DateOfNextDraw = new Date(nextDrawDate.split(' ')[0]).getTime();
                const today = new Date().getTime();
                const difference = DateOfNextDraw - today;

                const days = Math.floor(difference/(1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60))/1000);

                if (nextweek === 'Pending') {
                    nextweek = `${days} : ${hours} : ${minutes} : ${seconds}`;
                }

                $('#currentLeader').text(current);
                $('#nextLeader').text(nextweek);
            });
    };

    // setInterval(displayInfo, 1000);
});
