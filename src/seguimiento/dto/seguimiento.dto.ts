import { ApiProperty} from '@nestjs/swagger';

export class SeguimientoDto{
    @ApiProperty()
    readonly oikos_id: number;

    @ApiProperty()
    readonly tercero_id: number;

    @ApiProperty()
    readonly tipo_espacio_id: number;

    @ApiProperty()
    readonly tipo_registro: String;
  
    @ApiProperty()
    readonly activo: boolean;
  
    @ApiProperty()
    readonly fecha_creacion: Date;
    
    @ApiProperty()
    fecha_modificacion: Date;
}