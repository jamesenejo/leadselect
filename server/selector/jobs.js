import models from '../models/index';
import reusables from '../reusables';

const { Leaders } = models;
const { genRandomNumber, getNextFriday } = reusables;

const jobs = {
    selectALeader: () => {
        Leaders.all()
            .then((data) => {
                let { unselected, selected, current } = data[0].dataValues;

                // if unselected is empty, repopulated and empty selected
                if (unselected.length === 0) {
                    unselected = unselected.concat(selected);
                    selected = [];
                }

                const selection = (unselectedArray, selectedArray, currentLeader) => {
                    const randomNumber = genRandomNumber(unselectedArray.length);
                    const selectedLeader = unselectedArray[randomNumber];

                    if (selectedLeader === currentLeader) {
                        return selection(unselected, selected, current);
                    }

                    // add selected leader to selected Leaders array
                    selectedArray.push(selectedLeader);

                    // remove selected leader from unselectedLeaders
                    unselectedArray.splice(randomNumber, 1);

                    return selectedLeader;
                };

                const updateData = {
                    unselected,
                    selected,
                    nextweek: selection(unselected, selected, current),
                    nextDrawDate: getNextFriday()
                };

                // Update database
                return Leaders.update(updateData, { where: { id: 2 } });
            });
    },
    updater: () => Leaders.all()
        .then((data) => {
            const current = data[0].dataValues.nextweek;
            const nextweek = 'Pending';

            // Update current week's leader
            return Leaders
                .update({ current, nextweek }, { where: { id: 2 } });
        })
};

export default jobs;
