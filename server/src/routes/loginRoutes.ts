import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('hi there');
});

router.get('/login', (req: Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email"/>
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password"/>
			</div>
			<button>Submit</button>
		</form>
	`);
});

router.post('/login', (req: Request, res: Response) => {
	const  { email, password } = req.body;

	if (email && password && email === 'hi@hi.com' && password === 'password') {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.send('Invlaid email or password');
	}
});

export { router };
