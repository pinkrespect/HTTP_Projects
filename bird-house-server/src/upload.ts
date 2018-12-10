import { IncomingForm } from 'formidable';
import { Request, Response } from 'express';

const fs = require('fs')

export function upload(req: Request, res: Response) {
  const form = new IncomingForm();
  form.on('file', (field, file) => {
    fs.writeFile(file.name, file, 'binary', 
      console.log('File Saved')
      )

    console.log('file', file.name);
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
}
