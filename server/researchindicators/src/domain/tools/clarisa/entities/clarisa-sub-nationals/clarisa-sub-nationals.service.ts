import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ClarisaSubNational } from './entities/clarisa-sub-national.entity';
import { ControlListBaseService } from '../../../../shared/global-dto/clarisa-base-service';
import { CurrentUserUtil } from '../../../../shared/utils/current-user.util';

@Injectable()
export class ClarisaSubNationalsService extends ControlListBaseService<
  ClarisaSubNational,
  Repository<ClarisaSubNational>
> {
  constructor(dataSource: DataSource, currentUser: CurrentUserUtil) {
    super(
      ClarisaSubNational,
      dataSource.getRepository(ClarisaSubNational),
      currentUser,
    );
  }

  async findSubNationalsByCountryIso2(isoAlpha2: string) {
    return this.mainRepo.find({
      where: {
        country_iso_alpha_2: isoAlpha2,
        is_active: true,
      },
    });
  }
}
