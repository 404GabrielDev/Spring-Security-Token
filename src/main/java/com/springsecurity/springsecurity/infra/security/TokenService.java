package com.springsecurity.springsecurity.infra.security;

import com.springsecurity.springsecurity.domain.user.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Service
public class TokenService {
    @Value("${api.security.token.secret}")
    private String secret;

    //metodo pra gerar o token
    public String generateToken(User user) {
        try {

            SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());

            return Jwts.builder()
                    .issuer("login-auth-api")
                    .subject(user.getEmail())
                    .expiration(Date.from(generateExpirationDate()))
                    .signWith(key, SignatureAlgorithm.HS256)
                    .compact();
        } catch (JwtException e) {
            throw new RuntimeException("Erro ao gerar o token JWT", e);
        }
    }

    //metodo pra validar o token
    public Claims validateToken(String token) {
        try {
            SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());

            return Jwts.parser()
                    .verifyWith(key)
                    .requireIssuer("login-auth-api")
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

        } catch (JwtException e) {
            throw new RuntimeException("Token invalido ou expirado!");
        }
    }



    //metodo pra definir a expiração do token
    private Instant generateExpirationDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-3"));
    }
}
