import { Request, Response } from 'express';
interface SignupBody {
    name?: string;
    password?: string;
    email?: string;
}
export declare const signup: (req: Request<{}, {}, SignupBody>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=auth.d.ts.map