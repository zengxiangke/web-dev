
    export type RemoteKeys = 'mf_provider' | 'mf_provider/myMath';
    type PackageType<T> = T extends 'mf_provider/myMath' ? typeof import('mf_provider/myMath') :T extends 'mf_provider' ? typeof import('mf_provider') :any;