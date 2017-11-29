const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {
    Banner
        .findOne({
            slug: req.params.slug
        })
        //.populate('categoria')
        .then((banner) => {
            return res.render('banner/show', {
                title: 'Produto SmartMenu',
                layout: 'layouts/main',
                user: req.user || undefined,
                banner
            })
        })
        .catch((error) => {

        })
}