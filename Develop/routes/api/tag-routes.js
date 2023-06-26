const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Product.findByPk(req.perams.id,{
      include: [{ model:Product, ProductTag, as: 'tag_infomation_list'}]
    });
    if (tagData) {
      res.status(404).json({ message: 'No Tags found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// cre ate a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Catagory.create(req.body)
    res.status(200).json(tagData)
  }catch (err){
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try{ 
    const tagData = await Catagory.update(req.body,{
      where:{
        id:req.params.id,
      },
      individualHooks:true,
    })  
    if (!tagData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(tagData);
    }catch (err){
      res.status(500).json(err);
    }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
    try{
      const tagData = await Catagory.destroy({
        where:{id:req.params.id}
      });
      if (!tagData){
        res.status(404).json({ messsage:'no Tag with this id'});
        return;
      }
      res.status(200).json(tagData);
    }catch (err){
      res.status(500).json(err);
    }
});

module.exports = router;
