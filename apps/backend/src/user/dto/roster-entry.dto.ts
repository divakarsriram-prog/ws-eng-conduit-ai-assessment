import { ApiProperty } from '@nestjs/swagger';

export class RosterEntryDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  profileLink: string;

  @ApiProperty()
  articlesAuthoredCount: number;

  @ApiProperty()
  favoritesReceivedCount: number;

  @ApiProperty({ nullable: true })
  firstArticleDate: Date | null;
}
