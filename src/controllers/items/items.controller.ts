import { Controller ,Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
@Get()
async list():Promise<string[]>{
    return ['Pizza','Spaghetti','Meatballs']
}

}
