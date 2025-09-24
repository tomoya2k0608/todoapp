package com.example.todoapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * リソースが見つからない場合に投げる例外
 */
@ResponseStatus(HttpStatus.NOT_FOUND) // HTTP 404 を返す
public class ResourceNotFoundException extends RuntimeException {

    // コンストラクタ
    public ResourceNotFoundException(String message) {
        super(message);
    }

    // 必要に応じて cause を渡せるコンストラクタも追加可能
    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}