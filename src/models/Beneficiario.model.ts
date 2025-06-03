import { Column, DataType, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';//BelongsToBelongsTo
import { Visita } from './Visita.model';
//import { AssistenteSocial } from './AssistenteSocial.model';

@Table({
    tableName: 'beneficiario',
    timestamps: true
})
export class Beneficiario extends Model<Beneficiario> {
    @PrimaryKey
    @Column(DataType.STRING)
    uuid!: string;

    @Column(DataType.STRING)
    nome!: string;

    @Column(DataType.STRING)
    nome_responsavel!: string;

    @Column(DataType.STRING)
    data_nascimento!: string;

    @Column(DataType.INTEGER)
    phone1!: number;

    @Column(DataType.INTEGER)
    phone2!: number;

    @Column(DataType.STRING)
    latitude!: string;

    @Column(DataType.STRING)
    longitude!: string;

    @HasMany(() => Visita)
    visitas!: Visita[];

    //@ForeignKey(() => AssistenteSocial)
    //@Column(DataType.STRING)
    //assistenteId!: string;

    //@BelongsTo(() => AssistenteSocial)
    //assistente!: AssistenteSocial;
}
