import { Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to user page');
});

router.get('/list', (req, res) => {
    res.send('User list page');
});

export default router;
