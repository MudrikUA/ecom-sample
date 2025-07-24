import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', '..', 'static');
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName;
        } catch (e) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async removeFileByName(fileName: string): Promise<void> {
        try {
            const filePath = path.resolve(__dirname, '..', '..', 'static', fileName);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            } else {
                throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
            }
        } catch (e) {
            throw new HttpException('Произошла ошибка при удалении файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async checkIfAllFilesExist(fileNames: string[]): Promise<boolean> {
        try {
            const filePath = path.resolve(__dirname, '..', '..', 'static');
            for (const fileName of fileNames) {
                if (!fs.existsSync(path.join(filePath, fileName))) {
                    return false;
                }
            }
            return true;
        } catch (e) {
            throw new HttpException('Произошла ошибка при проверке файлов', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

