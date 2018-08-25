import models from '../models/index';

const { Leaders } = models;

const selectionController = {
    getCurrent: (req, res) => {
        Leaders
            .findById(1)
            .then(data => res.status(200).json({
                status: 'success',
                data
            }));
    }
};

export default selectionController;
