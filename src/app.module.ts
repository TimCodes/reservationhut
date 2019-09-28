import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UnitsModule } from './units/units.module';

@Module({
  imports: [UsersModule, AuthModule, ReservationsModule, UnitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
