// const list = (req, res) => {
//   Post.find({}).exec((err, orders) => {
//     if (err){
//       res.send(500, 'Database Error');
//     }
//     res.view('list', {orders:orders});
//   });
// };
//
// const add = (req, res)  => {
//   let title = req.body.title;
//   let body = req.body.body;
//
//   Post.create({title:title,body:body}).exec((err) => {
//     if (err){
//       res.send(500, {err: 'Database Error'});
//     }
//     res.redirect('/list');
//   });
// };
//
// const update = (req, res) => {
//   let title = req.body.title;
//   let body = req.body.body;
//
//   Post.update({id: req.params.id},{title:title,body:body}).exec((err) => {
//     if (err){
//       res.send(500, {err: 'Database Error'});
//     }
//     res.redirect('/list');
//   });
//   return false;
// };
//
// const destroy = (req, res) => {
//   Post.destroy({id:req.params.id}).exec( (err) => {
//     if (err){
//       res.send(500, {err: 'Database Error'});
//     }
//     res.redirect('/list');
//   });
//   return false;
// }
//
// modules.export  = {
//   list,
//   add,
//   update,
//   destroy
// };
