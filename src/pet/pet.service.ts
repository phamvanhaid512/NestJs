import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
  ) {}
  create(createPetDto: CreatePetDto) {
      const newPets = this.petsRepository.create(createPetDto);
      return this.petsRepository.save(newPets);
  }

  findAll() {
    const findAllPets = this.petsRepository.find();
    return findAllPets;
  }

  findOne(id: number) {
    const findOne = this.petsRepository.findOneBy({id});
    return findOne ;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return this.petsRepository.update(id,updatePetDto);
  }

  async remove(id: number) {
    const pets =  await this.findOne(id);
    return this.petsRepository.remove(pets);
  }
}
