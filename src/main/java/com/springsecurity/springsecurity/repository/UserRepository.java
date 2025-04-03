package com.springsecurity.springsecurity.repository;

import com.springsecurity.springsecurity.domain.user.User;
import io.jsonwebtoken.Claims;
import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.ScopedValue;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
}
