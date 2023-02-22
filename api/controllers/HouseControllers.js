import { db } from "../config/database.js"


export const getHouseById = (req, res)=>{
   try {const houseId = req.params.id
    const q = "SELECT * FROM houses WHERE id= (?)"
    db.query(q, [houseId], (data) => {
        return res.json(data)
    } )
    }

    catch(err){
        console.log(err);
        return res.json(err);
    }



};


export const getHouses = (req, res) => {
        const q = "SELECT * FROM houses";
        db.query(q, (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          }
          return res.json(data);
        });
   
};


export const createHouse = (req, res) => {
    const q = "INSERT INTO houses (`name`, `price`, `location`, `images`, `type`, `description`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.price,
      req.body.location,
      req.body.images,
      req.body.type,
      req.body.description,
    ]
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  };
  

export const updateHouse = (req, res) => {
  var houseId = req.params.id;
  const q = "UPDATE houses SET `name`=?, `price`=?, `location`= ?, `type`= ?, `description`=?, `images`= ? WHERE id = ?"
  const values = [
      req.body.name,
      req.body.price,
      req.body.location,
      req.body.type,
      req.body.description,
      req.body.images,
    ];

  db.query(q, [...values, houseId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });

};

export const deleteHouse = (req, res) => {
  const houseId = req.params.id;
  const q = " DELETE FROM houses WHERE id = ? ";

  db.query(q, [houseId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
}
