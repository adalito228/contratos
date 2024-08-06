module.exports = function (sequelize, DataTypes) {
  const Contract = sequelize.define('Contract', // Define que va a haber un modelo
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_darrer_anunci_plataforma: {
        type: DataTypes.DATE,
        allowNull: true
      },
      expedient: {
        type: DataTypes.STRING,
        allowNull: true
      },
      t_tol: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      tipus_contracte: {
        type: DataTypes.STRING,
        allowNull: true
      },
      procediment_contractaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pressupost_expedient: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      pressupost_expedient_sense: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      modificacions_import: {
        type: DataTypes.STRING,
        allowNull: true
      },
      modificacions_termini: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pr_rroga_d_un_altre_expedient: {
        type: DataTypes.STRING,
        allowNull: true
      },
      resultat_adjudicaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_acord_adjudicaci: {
        type: DataTypes.DATE,
        allowNull: true
      },
      data_formalitzaci: {
        type: DataTypes.DATE,
        allowNull: true
      },
      cif_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: true
      },
      nom_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: true
      },
      import_adjudicaci: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      import_adjudicaci_sense_iva: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      ofertes_rebudes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      tipus_tramitaci_: {
        type: DataTypes.STRING,
        allowNull: true
      },
      financiaci_ue: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'contracts',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Contract.associate = function (models) {
  }

  return Contract
}
