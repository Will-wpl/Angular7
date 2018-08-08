/**
 * name:http服务
 * describe:对http请求做统一处理
 */
import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { MainUrl } from '../util';
@Injectable()
export class HttpInterceptorService {
    constructor(private http: Http) {
    }
    /**
     * 统一发送请求
     */
    public request(params: any): any {
        // POST请求（参数、返回值类型都是任意类型）
        if (params['method'] == 'post' || params['method'] == 'POST') {
            return this.post(params['url'], params['data'], params['header']);
        } else { // 其他请求
            return this.get(params['url'], params['data'], params['header']);
        }
    }

    /**
     * get请求
     * param url 接口地址
     * param params 参数
     * returns {Promise<R>|Promise<U>}
     */
    public get(url: string, params: any,header:any): any {
        let theader:Headers = new Headers();
        theader.append('Authorization',header );
        let options={
            headers: theader,
            search:params
        }
        return this.http.get(`${MainUrl}/${url}`, options)
            .toPromise()
            .then(this.handleSuccess)
            .catch(res => this.handleError(res));
    }

    /**
     * post请求
     * param url 接口地址
     * param params 参数
     * returns {Promise<R>|Promise<U>}
     */
    public post(url: string, params: any,header:any):any {
        let theader:Headers = new Headers();
        theader.append('Authorization',header );
        return this.http.post(`${MainUrl}/${url}`, params,{headers:theader})
            .toPromise()
            .then(this.handleSuccess)
            .catch(res => this.handleError(res));
    }

    /**
     * 处理请求成功
     * param res
     * returns {{data: (string|null|((node:any)=>any)
   */
    private handleSuccess(res: Response) {
        let body = res["_body"];
        // console.log("接口返回的成功信息：" + body)
        if (body) { // 有数据返回
            return res.json();
            // return {
            //     data: res.json() || {}, // 返回内容
            //     code: res.json().code || {}, // 返回code
            //     message: res.json().message || {}, // 返回信息
            //     statusText: res.statusText,
            //     status: res.status,
            //     success: true
            // }
        } else { // 无数据返回
            return {
                data: res.json().data || {}, // 返回内容
                code: res.json().code || {}, // 返回code
                message: res.json().message || {}, // 返回信息
                statusText: res.statusText,
                status: res.status,
                success: true
            }
        }
    }

    /**
     * 处理请求错误
     * param error
     * returns {void|Promise<string>|Promise<T>|any}
     */
    private handleError(error) {
        console.log(error);
        let msg = '请求失败';
        if (error.status == 400) {
            console.log('请求参数正确');
        }
        if (error.status == 404) {
            console.error('请检查路径是否正确');
        }
        if (error.status == 500) {
            console.error('请求的服务器错误');
        }
        console.log(error);
        return { success: false, msg: msg };
    }
}
