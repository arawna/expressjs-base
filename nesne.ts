import { IsString, MaxLength } from "class-validator";

class Nesne {
    @IsString({ message: "İsim alanı yazı olmalıdır"})
    name: string;

    @IsString({ message: "Şifre alanı yazı olmalıdır"})
    password: string;
}
export default Nesne;