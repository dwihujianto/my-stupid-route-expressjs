module.exports = function () {
	this.root = (req,res) => {
		res.send('Ini juga bisa')
	} 

	this.coba = (req,res) => {
		res.send('Tapi kalo pake prefix repot')
	}

}
