
import { Query, Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { ApiTags } from '@nestjs/swagger';
import { SeguimientoDto } from './dto/seguimiento.dto';
import { FilterDto } from '../filters/dto/filter.dto';
import { Seguimiento } from './schemas/seguimiento.schema';



@ApiTags('seguimiento')
@Controller('seguimiento')
export class SeguimientoController {

    constructor(private readonly seguimientoService: SeguimientoService) { }

    @Post()
    async post(@Res() res, @Body() seguimientoDto: SeguimientoDto) {
        const seguimiento = await this.seguimientoService.post(seguimientoDto)
        return res.status(HttpStatus.OK).json({
            Data: seguimiento,
            Message: "Registration successfull",
            Status: "201",
            Success: true
        });
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const seguimientos = await this.seguimientoService.getAll(filterDto);
        return res.status(HttpStatus.OK).json({
            Data: seguimientos,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const seguimiento = await this.seguimientoService.getById(id);
        if (!seguimiento) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: seguimiento,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() seguimientoDto: SeguimientoDto) {
        const seguimiento = await this.seguimientoService.put(id, seguimientoDto);
        if (!seguimiento) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: seguimiento,
            Message: "Update successfull",
            Status: "200",
            Success: true
        });
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const seguimiento = await this.seguimientoService.delete(id);
        if (!seguimiento) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: {
                _id: id
            },
            Message: "Delete successfull",
            Status: "200",
            Success: true
        });
    }
}
