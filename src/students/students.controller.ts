import { Controller, Get, Param, Query } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }
  @Get('name/:name')
  findOne(@Param('name') name: string) {
    return this.studentsService.findOne(name);
  }
  @Get('/older')
  findOlder(@Query('year') year: number) {
    return this.studentsService.findOlder(year);
  }

  @Get('/getStudentsWithScholarships')
  getStudentsWithScholarships(@Query('scholar') scholar: boolean) {
    return this.studentsService.getStudentsWithScholarships(scholar);
  }
}
