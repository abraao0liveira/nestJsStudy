import { IsNotEmpty, Length } from "class-validator";


export class CreateMember{
    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: 'The member function should not be empty.',
    })
    function: string;
}
