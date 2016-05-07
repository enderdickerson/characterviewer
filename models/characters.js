module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Character', {
    guid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    account: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    race: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    class: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    gender: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    level: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    xp: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    money: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    playerBytes: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    playerBytes2: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    playerFlags: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    position_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    position_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    position_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    map: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    dungeon_difficulty: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    taximask: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    online: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    cinematic: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    totaltime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    leveltime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    logout_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    is_logout_resting: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    rest_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    resettalents_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    resettalents_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trans_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    trans_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    trans_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    trans_o: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    transguid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    extra_flags: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    stable_slots: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    at_login: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    death_expire_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    taxi_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    arenaPoints: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    totalHonorPoints: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    todayHonorPoints: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    yesterdayHonorPoints: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    totalKills: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    todayKills: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    yesterdayKills: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    chosenTitle: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    watchedFaction: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    drunk: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    health: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    power1: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    power2: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    power3: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    power4: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    power5: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    exploredZones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    equipmentCache: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ammoId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    knownTitles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    actionBars: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    deleteInfos_Account: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    deleteInfos_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleteDate: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'characters',
    timestamps: false
  });
};
