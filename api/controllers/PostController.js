/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:function (req, res) {
    Post.find({}).exec((err, orders) => {
      if (err){
        res.send(500, 'Database Error');
      }
      res.view('list', {orders:orders});
    });
  },

  edit:function (req, res) {
    Post.findOne({id:req.params.id}).exec((err, order) => {
      if (err){
        res.send(500, {err: 'Database Error'});
      }
      // console.log('order', order);
      res.view('edit', {order});
    });
  },

  update:function (req, res) {
    let title = req.body.title;
    let body = req.body.body;

    Post.update({id: req.params.id},{title:title,body:body}).exec((err) => {
      if (err){
        res.send(500, {err: 'Database Error'});
      }
      res.redirect('/list');
    });
    return false;
  },

  destroy:function (req, res) {
    Post.destroy({id:req.params.id}).exec( (err) => {
      if (err){
        res.send(500, {err: 'Database Error'});
      }
      res.redirect('/list');
    });
    return false;
  }
};

