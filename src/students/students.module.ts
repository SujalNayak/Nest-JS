import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentSchema, Students } from 'src/schemas/student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Students.name, schema: StudentSchema }])
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
