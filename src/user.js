module.exports = (express) => {
	const router = express.Router()
	
	router.get('/',(req,res) => {
		res.send('halo')
	})

	router.get('/coba',(req,res) => {
		res.send('coba bisa')
	})


	return router
}
