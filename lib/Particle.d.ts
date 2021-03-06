import { IVector3, IVectorConstructor } from './Vector3';
import { IEnv } from './env';
export declare type ParticleID = string | number;
declare type ThreeItemsArray = [number, number, number];
export interface IParticleOption {
  id: ParticleID;
  position?: ThreeItemsArray;
  a?: ThreeItemsArray;
  v?: ThreeItemsArray;
  mass?: number;
}
export interface IParticle {
  id: ParticleID;
  position: IVector3;
  a: IVector3;
  v: IVector3;
  mass: number;
  move(ENV: IEnv): IParticle;
  accelerate(force: IVector3): IParticle;
  userData<T>(data: T): IParticle;
  userData<T>(): T;
}
export default class Particle implements IParticle {
  id: ParticleID;
  position: IVector3;
  a: IVector3;
  v: IVector3;
  mass: number;
  private _a;
  private _v;
  private _userData;
  private VectorConstructor;
  constructor(
    option: IParticleOption | ParticleID,
    Vector?: IVectorConstructor
  );
  /**
   * 模拟运动
   *
   * @returns {Particle}
   * @memberof Particle
   */
  move(ENV: IEnv): Particle;
  /**
   * 施加力
   * 只会改变加速度
   *
   * @param {IVector3} force
   * @returns {Particle}
   * @memberof Particle
   */
  accelerate(force: IVector3): Particle;
  userData<T>(): T;
  userData<T>(data: T): this;
}
export {};
