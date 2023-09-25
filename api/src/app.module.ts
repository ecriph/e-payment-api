import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [AuthModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
