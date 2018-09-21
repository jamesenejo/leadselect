import models from '../models/index';
import jobs from '../selector/jobs';

const { Leaders } = models;
const { selectALeader, updater } = jobs;

const selectionController = {
    getCurrent: (req, res) => {
        const now = new Date().toDateString();
        const [day] = now.split(' ');

        Leaders.findById(2)
            .then((data) => {
                const { nextweek } = data;

                if ((day === 'Fri') && (nextweek === 'Pending')) {
                    selectALeader();
                } else if ((day === 'Mon') && (nextweek !== 'Pending')) {
                    updater();
                }

                res.status(200).json({
                    status: 'success',
                    data
                });
            });
    }
};

export default selectionController;
