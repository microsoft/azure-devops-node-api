declare module "tunnel" {
    export interface TunnelAgent {
    }
    
    export interface TunnelOptions {
        maxSockets: number;
        proxy: ProxyOptions;
    }
    
    export interface ProxyOptions {
        host: string;
        port: string;
        localAddress?: string;
        proxyAuth?: string;
        headers?: any;
    }
    
    export function httpOverHttp(options: TunnelOptions): TunnelAgent;
    export function httpOverHttps(options: TunnelOptions): TunnelAgent;
    export function httpsOverHttp(options: TunnelOptions): TunnelAgent;
    export function httpsOverHttps(options: TunnelOptions): TunnelAgent;
}