/**
 * 轮询休眠时长 ms
 */
export declare const SLEEP_MS: number;
/**
 * 0 地址
 */
export declare const ZERO_ADDRESS: string;
/**
 * uint(-1)
 */
export declare const MAXIMUM_U256: string;
/**
 *  b / 1e18
 * @param bnAmount
 * @param precision
 */
export declare const convertBigNumber: (bnAmount: string | number, precision?: number) => string;
/**
 * b * 1e18
 * @param bnAmount
 * @param precision
 */
export declare const convertAmount: (bnAmount: string | number, precision?: number) => string;
/**
 * amount * (10 ** decimals)
 * @param amount
 * @param decimals
 */
export declare const toTokenAmount: (amount: string | number, decimals?: number) => string;
/**
 * 休眠指定时间
 * @param ms
 */
export declare const sleep: (ms: number) => Promise<unknown>;
/**
 * 判断算法未空字符串
 * @param value
 */
export declare const isNullOrBlank: (value: string) => boolean;
/**
 * 重试
 * @param func
 * @param retryCount
 */
export declare const retry: (func: () => any, retryCount?: number) => Promise<any>;
export declare function calculateGasMargin(value: string): number;
export declare function eqAddress(addr0: string, addr1: string): boolean;
/**
 * 日志工具
 */
export declare class TraceTool {
    private logShow;
    private errorShow;
    private debugShow;
    setLogShow(b: boolean): void;
    setErrorShow(b: boolean): void;
    setDebugShow(b: boolean): void;
    print(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
}
export declare const Trace: TraceTool;
